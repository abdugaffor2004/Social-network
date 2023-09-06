import { ErrorBoundary } from "../Utilities/Boundary/boundary"


export const withBoundary = (Component) => (props) => {
    return <ErrorBoundary> <Component {...props} /> </ErrorBoundary>
}