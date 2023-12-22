interface Creator {
    id     :    number,             
  fullName :  string,
  userName  : string,
  bgImage   : string  ,          
  pfImage  :  string,             
  status    : Boolean,
 bio      :  string,
  dateBirth : string,
  email     : string,
  address   : string
}
interface Post {
  id      :  number,
  status   : string,
  image     :string,
  like    : number, 
  creatorId: number
  comment   :Array

}