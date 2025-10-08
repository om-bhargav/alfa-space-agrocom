import React from 'react'
import { Loader2 } from "lucide-react";
const Loading = ({...props}) => {
  return (
   <Loader2 {...props} className={`animate-spin ${props.className}`} />
  )
}

export default Loading;