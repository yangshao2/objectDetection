function  object(stateid,cid1,cid2)

cid1=str2num(cid1)
cid2=str2num(cid2)

warning('off','all');



for iii=cid1:cid2

%infile1=sprintf('/fastscratch/yshao/wri/%s/texas_%d.tif',stateid,iii);

infile1=sprintf('/fastscratch/yshao/wri/%s/bus_%s%d.tif',stateid, stateid,iii);

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
props = regionprops(a, 'Perimeter'); 
Peri = [props.Perimeter];
Pratio=Peri./allAreas;
%circularities = [props.Perimeter].^2 ./ (4 * pi * allAreas);

avalue=a(a>0);
mx=zeros(length(avalue),1);
pr=zeros(length(avalue),1);
cr=zeros(length(avalue),1);
max(avalue)
for i=1:max(avalue)
    %cr(avalue==i)=circularities(i);
pr(avalue==i)=Pratio(i);
mx(avalue==i)=majoraxis(i);
end
idvalue=zeros(length(avalue),1)+1;
idvalue(mx<8)=0;
idvalue(mx>20)=0;
%idvalue(cr<1|cr>3.0)=0;
idvalue(pr>1.15)=0;

a1=a;
a1(a1>0)=idvalue;

a2=a;
a2(a2>0)=mx;

a3=a;
a3(a3>0)=pr;

%a4=a;
%a4(a4>0)=cr;

%Ilabel = bwlabel(a1,4);
%stat = regionprops(Ilabel,'centroid');
%a1(a1>0)=0;

%for i=1:length(stat)
  %  a1(round(stat(i).Centroid(2)),round(stat(i).Centroid(1)))=1;
    
%end


   %B = ones(80,80)/80^2;
   % C = conv2(a1,B,'same');
    %C(C<=0.0005)=0;
    %C(C>0)=1;
 %   C=uint8(C);
 %Ilabel=bwlabel(C,8);
%clear C
%a=uint8(C);
%clear Ilabel


 outfile1=sprintf('/fastscratch/yshao/wri/%s/o%d.tif',stateid,iii);
geotiffwrite(outfile1,a1,R)

 %outfile2=sprintf('/fastscratch/yshao/wri/sc/pmx%d.tif',iii);
%geotiffwrite(outfile2,a2,R)
 %outfile3=sprintf('/fastscratch/yshao/wri/sc/ppr%d.tif',iii);
%geotiffwrite(outfile3,a3,R)
 %outfile4=sprintf('/fastscratch/yshao/wri/sc/pcr%d.tif',iii);
%geotiffwrite(outfile4,a4,R)



end




