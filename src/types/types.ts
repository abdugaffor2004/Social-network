export type ProfileType = {
    userId: number,
    fullName: string,
    photos: {
      large: string | null,
      small: string | null
      
    }
  }
  
export type PostDataType = {
id: number,
img: string,
message: string
}

export type PhotosType = {
  large: string,
  small: string
}

export type UserType = {
  userId: number,
  name: string,
  status?: string,
  photos:{
    small:string ,
    large:string
  },
  followed: boolean
}

export type DialogsType = {
  id: number,
  name: string,
  img: string
}

export type MessageType = {
  id: number,
  message: string
}