

export interface AddStudentProp{
    
}


export interface Modalinterface{
    title :string
    type:string
    message:string
    onCancel:(val:any)=>void
}


export interface Error {
    title:string
    message:string
}