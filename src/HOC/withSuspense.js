import { Suspense, lazy } from "react"

export let withSuspense = (Component) => (props) => {
   

   return <Suspense fallback={<> loading... </>}> <Component  /> </Suspense>
}