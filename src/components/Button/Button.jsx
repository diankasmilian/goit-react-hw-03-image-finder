
import { LoadMoreButton } from "./Button.styled";

export const LoadMore = ({handleLoadMore})  => {
      return (
         <LoadMoreButton type="button" onClick={() => handleLoadMore()}> Load More </LoadMoreButton>
      )
   }
