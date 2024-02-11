import numpy as np
import os,sys
import subprocess
import fnmatch
import glob
from osgeo import gdal,ogr,osr,gdalconst
#import geopandas as gpd
#import rasterio
#from sklearn.ensemble import RandomForestClassifier

fpath='/fastscratch/yshao/wri/'+sys.argv[1]
os.chdir(fpath)
filelist=glob.glob('f*.tif')
print(filelist)


number1 = int(sys.argv[2])
number2 = int(sys.argv[3])

for count in range(number1,number2):
        
    infile = "f" + str(count) + ".tif"
    print(infile)
    outfile = "p"+str(count)+".tif"
    os_setnull="gdal_translate -of GTiff -a_nodata 0 " + infile + " " + outfile
    print(os_setnull)
    subprocess.run(os_setnull,shell=True)
    outfile1="cibus"+str(count)+".shp"
    os_rtop="gdal_polygonize.py "+ outfile + " " +  outfile1
    print(os_rtop)
    subprocess.run(os_rtop,shell=True)
    os.remove(outfile)
