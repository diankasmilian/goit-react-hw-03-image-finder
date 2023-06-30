import { ErrorText } from "./ErrorTitle.styled"

export const ErrorTitle = ({message}) => {
   return (
      <div>
         <ErrorText>{message}</ErrorText>
      </div>
      
   )
}