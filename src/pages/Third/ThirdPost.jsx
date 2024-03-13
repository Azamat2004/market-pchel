import React from 'react'
import classes from './Third.module.css'


const ThirdPost = () => {

    return (
        <div>
            <div className={classes.img}>
                <img src="./img/999.jpg" alt="" />
            </div>

          

            <div className={classes.designcontainer}>
                <div className={classes.container}>
                    <h1>Мамедиев Чонболуш Кокошерович, №1 Пчеловод В Кыргызстане</h1>
                    <div className={classes.profile}>
                        <img src="./img/41.jpg" alt="" />
                        <div className={classes.profile_name}>
                            <h2>Chonbolush Mamediev</h2>
                            <h5>Beekeeper</h5>
                        </div>
                        <div className={classes.photoshop}>
                            <h2>Photoshop</h2>
                            <h5>Categories</h5>
                        </div>
                        <div className={classes.reviews}>
                            <h2>25 Reviews</h2>
                            <h5>Reviews</h5>
                        </div>

                       
                    </div>
                    <div className={classes.uxui}>
                        <img src="./img/41.jpg" alt="" />
                        <hr />
                        <img src="./img/555.jpg" alt="" />
                        <hr />
                        <img src="./img/222.jpg" alt="" />
                        <hr />
                        <img src="./img/333.jpg" alt="" />
                        <hr />
                        <img src="./img/444.jpg" alt="" />
                        <hr />
                        <img src="./img/666.jpg" alt="" />
                        <hr />
                        <img src="./img/777.jpg" alt="" />
                        </div>
                </div>
                <div className={classes.second_container}>
                    <h1>Categories</h1>
                    <div className={classes.line}></div>

                    <div  className={classes.web_design}> <h3>страна: Кыргызстан (9)</h3></div>
                    <div  className={classes.web_design}><h3 >город: Ош (3)</h3></div>
                    <div  className={classes.web_design}><h3 >район: Узген (23)</h3></div>
                    <div  className={classes.web_design}><h3 >Graphic Design (5)</h3></div>
                    <div  className={classes.web_design}><h3 >UX-UI Design (7)</h3></div>
                    <div  className={classes.web_design}><h3 >Print Design (2)</h3></div>
                   <div  className={classes.web_design}> <h3 >Logo- Design (5)</h3></div>
                    <div className={classes.browse}>
                        <h1>Биография Фермера</h1>
                        <div className={classes.lini}></div>

                        <p >Мамедиев Чонболуш Кокошерович родился в 1962-году 4-августа. С детства занимался пчеловодством, все предки были пчеловодами. В данный момент его МЕДЫ продаются очень хорошо. Экспорт: Узбекистан, Казахстан, и в Россию</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ThirdPost