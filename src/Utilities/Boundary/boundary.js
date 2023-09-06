import React from "react"
import s from './boundary.module.css'

export class ErrorBoundary extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({error: error, errorInfo: errorInfo})
    }

    render(){
        if(this.state.errorInfo)
        return(
            <div className={s.boundaryWrap}>
          <h2> App crashed </h2>
          <details style={{ whiteSpace: 'pre-wrap', }}>
            <summary>More about Error</summary>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
        )

        return this.props.children


    }

}