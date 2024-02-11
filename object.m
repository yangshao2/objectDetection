function  object(cid1,cid2)

cid1=str2num(cid1)
cid2=str2num(cid2)

warning('off','all');



for iii=cid1:cid2
     infile1=sprintf('/home/yshao/wri/bus/nc/bus_nc%d.tif',iii);

a=imread(infile1);
[A, R] = geotiffread(infile1);

al=bwareaopen(a,80,4);
al=uint8(al);
a=a-al;
asmall=bwareaopen(a,20);
a=bwlabel(asmall,4);

clear al
clear asmall
props = regionprops(a, 'Area'); 
allAreas = [props.Area];
props = regionprops(a, 'MajorAxisLength'); 
majoraxis = [props.MajorAxisLength];
props = regionprops(a, 'MajorAxisLength'); 
majoraxis = [props.MajorAxisLength];
props = regionprops(a, 'Perimeter'); 
Peri = [props.Perimeter];
Pratio=Peri./allAreas;

id=1:max(max(a));
id(majoraxis<7)=0;
id(majoraxis>15)=0;
id(Pratio>1)=0;
id=id(id>0);

a1=a;
a1(a1>0)=0;
a1=uint8(a1);
for i=1:length(id)
    a1(a==id(i))=1;
    i
end
clear a


Ilabel = bwlabel(a1,4);
stat = regionprops(Ilabel,'centroid');
a1(a1>0)=0;

for i=1:length(stat)
    a1(round(stat(i).Centroid(2)),round(stat(i).Centroid(1)))=1;
    i
end




   B = ones(80,80)/80^2;
    C = conv2(a1,B,'same');
    C(C<=0.0005)=0;
    C(C>0)=1;
    C=uint8(C);
 Ilabel=bwlabel(C,8);
clear C
a=uint8(Ilabel);
 outfile=sprintf('/home/yshao/wri/bus/o%d.tif',iii);
geotiffwrite(outfile,a,R)

end


% fileID = fopen('test.dat','w');
%    fwrite(fileID,a','uint8');
%    fclose(fileID);

%save('test.mat', 'a', '-v7.3')
