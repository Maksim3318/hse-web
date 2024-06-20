import React from 'react'

function Index() {
  return (
    <div>
      <section className="space-md">
        <div className="container ">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="maintitle">Подача заявки на 3D печать</h1>
                </div>
                <div className="col-lg-6 back">

                </div>
            </div>

        </div>

        <div className="how container">

                <div className="row">
                    <div className="col-lg-6">

                        <div style={{marginBottom: "-7em"}}></div>
                        <div className="sticky">
                            <div><h2>Как подать заявку?</h2></div>
                        </div>
                        <div style={{ marginTop: '7em' }}></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="step">
                            <div className="row">
                                <hr noshade="true" className="line"/>
                            </div>
                            <div className="row">
                                <h3>Создать модель</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-8">
                                    <p>Нужно типа как-то создать файл. Инструкция лежит туть...</p>
                                </div>
                            </div>
                        </div>

                        <div className="step">
                            <div className="row">
                                <hr noshade="true" className="line"/>
                            </div>
                            <div className="row">
                                <h3>Подать заявку</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-8">
                                    <p>Нужно тыкнуть туда то и указать какие-то данные!</p>
                                </div>
                            </div>
                        </div>

                        <div className="step">
                            <div className="row">
                                <hr noshade="true" className="line"/>
                            </div>
                            <div className="row">
                                <h3>Отслеживать статус заказа</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-8">
                                    <p>Есть кнопочка, где есть номер заказа и его статус. Чекайте!</p>
                                </div>
                            </div>
                        </div>

                        <div className="step">
                            <div className="row">
                                <div style={{ marginTop: '7em' }}></div>
                            </div>
                            <div className="row">
                                <h3>Получите заказ</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-8">
                                    <p>Заберите свою штучку дрюку из лабы! И предупредите, когда будете забирать!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <hr noshade="true" className="line"/>
                        </div>


                    </div>
                </div>


        </div>

      </section>
      <footer className="footer pb-4 pt-4" id='about'>
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-6 col-sm-12 align-self-center">
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div style={{position:"relative", overflow:"hidden"}}>
                    <a href="https://yandex.ru/maps/org/niu_vshe_moskovskiy_institut_elektroniki_i_matematiki_im_a_n_tikhonova/1544682531/?utm_medium=mapframe&utm_source=maps" style={{"color":"#eee","fontSize":"12px","position":"absolute","top":"0px"}}>НИУ ВШЭ, Московский институт электроники и математики им. А. Н. Тихонова</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{"color":"#eee","fontSize":"12px","position":"absolute","top":"14px"}}>ВУЗ в Москве</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps" style={{"color":"#eee","fontSize":"12px","position":"absolute","top":"28px"}}>Дополнительное образование в Москве</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.413461%2C55.798110&mode=poi&poi%5Bpoint%5D=37.409742%2C55.803407&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1544682531&z=15.25" width="441" height="284" frameBorder="1" allowFullScreen={true} style={{"position":"relative"}} title="myFrame"></iframe>
                  </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
