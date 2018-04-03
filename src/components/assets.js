export const timeInterval = [];
export const hourInterval = [];
export const dayInterval = [];
export const monthInterval = [];
export const dayOfWeek = [];
export const yearInterval = [];

for(var s =0; s< 60; s++){
    timeInterval.push(s);
}
for(var h =0; h< 24; h++){
    hourInterval.push(h);
}
for(var d=1; d<= 31; d++){
    dayInterval.push(d);
}
for(var m=1; m<= 12; m++){
    monthInterval.push(m);
}
for(var dw=1; dw<=7; dw++){
    dayOfWeek.push(dw);
}
for(var y=1970; y<=2099; y++){
    yearInterval.push(y);
}
