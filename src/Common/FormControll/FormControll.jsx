import s from "./FormControll.module.css";

export const customTextarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>

    <div>
        <textarea className={hasError && s.errorBorder} {...input} {...props} />
    </div>

       {hasError && <span className={hasError && s.errorPop}> {meta.error} </span>}

    </div>
  );
};

// export const customFormControll = (Component) => ({input, meta, ...props}) =>{
//     console.log(input)
//     return(

//         <div>
//            <Component {...input}  {...props}/>
//         </div>
//     )
// } // Хотел сделать динамическую фунцию, но объявился баг: после первой буквы фокус с textarea пропадает.
