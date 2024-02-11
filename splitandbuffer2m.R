#work with ms building footprint
library(raster)
library(rgdal)
library(rgeos)

#revise three locations

args = commandArgs(trailingOnly=TRUE)
msname = args[1]
stateid=args[2]
fip=args[3]
num1=as.integer(args[4])
num2=as.integer(args[5])


f<-paste0('fishnet_',fip)
fishnet<-readOGR('/fastscratch/yshao/wri/shapefile/fishnets',layer=f)
ms<-readOGR('/fastscratch/yshao/wri/ms',layer=msname)

for (i in num1:num2){
  
    county<-fishnet[i,]
    countyp<-spTransform(county,crs(ms))
    asub<-ms[countyp,]
    asub_b<-gBuffer(asub,byid=T,width=2)
    outfile<-paste('ms_fish',i,sep='')
    fpath<-paste0('/fastscratch/yshao/wri/ms/',stateid) 
   writeOGR(asub_b,dsn=fpath,layer=outfile,driver='ESRI Shapefile',overwrite=T)
    print(i)
  }
  
