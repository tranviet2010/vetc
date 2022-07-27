export function PhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

export function CheckText(text){
    return /[ `0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text)
   
}
export function CheckMail(text){
    return /\S+@\S+\.\S+/.test(text)
}
export function ValidateDate(text){
    let arrrayDate=text.split("-");
    let dd=arrrayDate[2];
    let mm=arrrayDate[1];
    let yyyy=arrrayDate[0];
    let newDate=`${dd}-${mm}-${yyyy}`
    return newDate
}