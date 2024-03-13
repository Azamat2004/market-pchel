import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const handleBuyClick = async () => {
        try {
            // Логика для отправки запроса на сервер
            const response = await fetch('url-сервера-для-обработки-заказа', {
                method: 'POST',
                // Например, если вам не нужны данные заказа, можно просто отправить пустой объект
                body: JSON.stringify({}), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data); // Логика обработки ответа от сервера
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    
    

    return (


        <div className="container">
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/11.jpg" alt="" /></Link> </div>
                <div className="name">
                         
                    <h1><Link className='perehod' to="/thirdpost" >Лечебный для кашля</Link></h1>
                    <button onClick={handleBuyClick} className="buy-button">Купить</button>
                    <b className="price">$25</b>
                    

                </div>
                <h6>25 Reviews</h6>
                <div className="opis-name">
                    <p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p>
                    </div>
                <div className="grafic">
                    <div className="year"><h3>2 year</h3>
                    <p className="course">Course</p>
                    </div>
                    <div className="class-size">
                        <h3>15</h3>

                        <p className="size">Class-size</p>
                        </div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>


            
            <div className="col">
                <div className="image"><Link to="/thirdpost"><img src="./img/22.jpg" alt="" /></Link></div> <div className="name">
                <h1><Link className='perehod' to="/thirdpost" >Лечебный для Язвы!!!</Link></h1>
                <button onClick={handleBuyClick} className="buy-button">Купить</button>
                    <b className="price">$100</b>
                    <br />
                </div><h6>25 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve, <br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/33.webp" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Лечебный  (Поднимает иммунитет)</Link></h1>
                <b className="price">$0</b>
                <br />
            </div><h6>15 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>



            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/455.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Лечебный  (Поднимает иммунитет)</Link></h1>
                <b className="price">$0</b>
                <br />
            </div><h6>15 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>


            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/655.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Лечебный  (Поднимает иммунитет)</Link></h1>
                <b className="price">$0</b>
                <br />
            </div><h6>15 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>



            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/755.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Лечебный  (Поднимает иммунитет)</Link></h1>
                <b className="price">$0</b>
                <br />
            </div><h6>15 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>





 </div>



    )
}

export default Home