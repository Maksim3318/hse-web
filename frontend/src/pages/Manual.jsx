import React from 'react'

function Manual() {
  return (
    <div>
      <section className="space-md">
        <div className="container ">
            <div className="row" style={{marginBottom: "60px"}}>
                <div className="col-lg-12 text-center frame">
                    <h1 className="maintitle">Инструкция по<br/>подготовке 3d-модели</h1>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-lg-5">

                    <div style={{marginBottom: "-7em"}}></div>
                    <div className="sticky">
                        <div><h2>ОБЩИЕ ТРЕБОВАНИЯ К 3D-ПЕЧАТАЕМЫМ ОБЪЕКТАМ</h2></div>
                    </div>
                    <div style={{marginTop: "7em"}}></div>
                </div>

                <div className="col-lg-7">
                    <div className="step">
                        <div className="row">
                            <hr noshade="true" className="line"></hr>
                        </div>
                        <div className="row">
                            <h3>Замкнутость поверхности</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <p>Одним из самых важных требований является целостность поверхности модели. Другими словами, каждая вершина должна быть соединена ребрами и являться частью полигона, не должно быть свободных ребер или вершин, не относящихся к поверхности. При этом какие-либо полигоны не должны отсутствовать, разрывая общую поверхность.</p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="row">
                            <hr noshade="true" className="line"></hr>
                        </div>
                        <div className="row">
                            <h3>Минимальная толщина</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <p>Любая поверхность должна иметь минимальную толщину в зависимости от материала, из которого она будет печататься. Для печати в лаборатории толщина стенок объекта должна составлять не менее 1мм.</p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="row">
                            <hr noshade="true" className="line"></hr>
                        </div>
                        <div className="row">
                            <h3>Пересечение поверхностей</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <p>Модель должна иметь непрерывную внешнюю оболочку, иначе внутри объекта создается поверхность с бесконечно малой толщиной стенки, которая не сможет быть напечатана.</p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="row">
                            <hr noshade="true" className="line"></hr>
                        </div>
                        <div className="row">
                            <h3>Ориентация поверхностей</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <p>Большая часть программ для моделирования определяет направление поверхностей (обычно оно задается направлением, ориентацией нормалей). Для того, чтобы корректно определить объем модели, все поверхности должны быть ориентированы наружу.
                                <br/><br/>
                                Наложения поверхностей или полигонов в модели тоже необходимо избегать, программа обработки будет считать это ошибкой и не определит правильный объем.</p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="row">
                            <hr noshade="true" className="line"></hr>
                        </div>
                        <div className="row">
                            <h3>Распределенная нагрузка</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <p>Обратите внимание на пропорции и распределение нагрузки в вашей модели. Если вы хотите добиться устойчивости, то стоит проверить площадь опорной точки и конструкцию подставки. Иногда необходимо добавить дополнительные элементы для стабильности.
                                    <br/><br/>
                                    Еще один важный момент — это части модели, которые находятся под постоянной нагрузкой. Допустимая нагрузка зависит от используемого материала, но мы всетаки советуем избегать таких конструкций или предусматривать дополнительное упрочнение. Иначе модель может быть повреждена при извлечении из принтера, обработке и дальнейшем использовании.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <hr noshade="true" className="line"></hr>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{"padding": "0px 30px 0px 0px"}}>
                        <table>
                            <caption className="h5 table-title">КАКИМ ДОЛЖЕН БЫТЬ ФАЙЛ С МОДЕЛЬЮ</caption>
                            <tbody>
                                <tr>
                                    <td>Формат файла</td>
                                    <td>.STL</td>
                                </tr>
                                <tr>
                                    <td>Программы для экспорта в STL</td>
                                    <td>Autodesk 3ds Max; Blender; Solid Works; NX6; Компас 3D; Fusion</td>
                                </tr>
                                <tr>
                                    <td>Размеры файла</td>
                                    <td>Файл не должен превышать 100Мб. Чем меньше размер и проще модель, тем лучше.</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="col-lg-6" style={{"padding": "0px 0px 0px 0px"}}>
                        <table>
                            <caption className="h5 table-title">ОСОБЕННОСТИ МОДЕЛИРОВАНИЯ ДЛЯ ПЕЧАТИ</caption>
                            <tbody>

                                <tr>
                                    <td>Размеры модели</td>
                                    <td>Максимально возможная область печати составляет круг диаметром 400 мм. Рекомендуемые размеры моделей - 197 х 215 х 305 мм. </td>
                                </tr>
                                <tr>
                                    <td>Минимальная толщина объектов</td>
                                    <td>Минимальные размеры и толщина объектов - не менее 1,2 мм.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Manual
