import { useState } from "react";
import s from "./Paginator.module.css"
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'




const Paginator = (props, {portionSize=10}) =>{

    let pagesCount = props.totalUsersCount/props.pageSize; //Сколько страниц получается
    let pages =[] //массив из цифр(номеров страниц)
    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
    }

    const setCurrentPageCaller = (currentPage) => {
        props.setCurrentPageThunk(props.pageSize, currentPage)
    };


    const portionCount = Math.ceil(pagesCount / portionSize) // Число порций
    const [portionNumber, setPortionNumber] = useState(1) // Номер порции
    const infignum = (portionNumber - 1)* portionSize + 1 // нижняя граница форм-ла вычисления
    const supremum = portionNumber * portionSize // верхняя граница форм-ла вычисления
    

    return <div className={s.pagination}>

    {
      portionNumber > 1 && <button className={s.prevNextPortionButton} onClick={ () => {setPortionNumber(portionNumber- 1); setCurrentPageCaller(infignum - portionSize) }}> <HiArrowLeft size={21}/> </button>
      // Если номер порции больше 1 то показываем копку prev
    } 

    {
      pages.filter( (p) => p >= infignum && p <= supremum )
      .map( (page) =>{
        return <button key={page} onClick={ () => setCurrentPageCaller(page)} className={ (props.currentPage === page) ? s.selectedPage : null}> {page} </button>
      }) //Перебираем массив pages и отрисовываем кнопки пагинации в отрезке от infignum до supremum, выделяем активную копку
    } 

    {
      portionNumber <= portionCount && <button className={s.prevNextPortionButton} onClick={ () => {setPortionNumber(portionNumber+ 1); setCurrentPageCaller(infignum+portionSize)} }> <HiArrowRight size={21}/> </button>
    }



  </div>
}

export default Paginator 