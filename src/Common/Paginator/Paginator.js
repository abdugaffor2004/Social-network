import s from "../../Components/FindUsers/FindUsers.module.css";



const Paginator = (props) =>{

    let pagesCount = props.totalUsersCount/props.pageSize; //Сколько страниц получается
    let pages =[] //массив из цифр(номеров страниц)
    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
    }

    const setCurrentPageCaller = (currentPage) => {
        props.setCurrentPageThunk(props.pageSize, currentPage)
    };


    return <div className={s.pagination}>

    {
      pages.map( (page) =>{
        return <button onClick={ () => setCurrentPageCaller(page)} className={ props.currentPage === page ? s.selectedPage : null}> {page} </button>
      }) //Перебираем массив pages и отрисовываем кнопки пагинации, выделяем активную копку
    } 


  </div>
}

export default Paginator