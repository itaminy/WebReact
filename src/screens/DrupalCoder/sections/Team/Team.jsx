import React from "react";
import "./style.css";
import image2472 from "../../../../assets/img/IMG_2472_0.jpg";
import image2539 from "../../../../assets/img/IMG_2539_0.jpg";
import image2474 from "../../../../assets/img/IMG_2474_1.jpg";
import image2522 from "../../../../assets/img/IMG_2522_0.jpg";
import image9971 from "../../../../assets/img/IMG_9971_16.jpg";

export const Team = () => {
    return (
        <div className="team">

            <div className="text-wrapper-15">Команда</div>

            <div className="group-wrapper">
                <div className="group-4">
                    <img className="image-8" alt="Image" src={image2472} />

                    <div className="group-5">
                        <div className="text-wrapper-16">Сергей Синица</div>

                        <div className="text-wrapper-17">
                            Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора
                        </div>
                    </div>
                </div>
            </div>

            <div className="div-wrapper">
                <div className="group-6">
                    <div className="text-wrapper-18">Роман Агабеков</div>

                    <p className="text-wrapper-19">
                        Руководитель отдела DevOPS, директор
                    </p>

                    <img className="image-9" alt="Image" src={image2539} />
                </div>
            </div>

            <div className="text-wrapper-20">Алексей Синица</div>

            <p className="text-wrapper-21">
                Руководитель отдела и поддержки сайтов
            </p>

            <img className="image-10" alt="Image" src={image2474} />

            <div className="group-7">
                <div className="group-8">
                    <div className="text-wrapper-22">Дарья Бочкарева</div>

                    <div className="text-wrapper-23">
                        Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов
                    </div>

                    <img className="image-9" alt="Image" src={image2522} />
                </div>
            </div>

            <div className="group-9">
                <div className="group-8">
                    <div className="text-wrapper-22">Ирина Торкунова</div>
                    <div className="text-wrapper-23">Менеджер по работе с клиентами</div>
                    <img className="image-9" alt="Image" src={image9971} />
                </div>
            </div>

            {/* КНОПКА В САМОМ НИЗУ */}
            {/* <div className="team-show-more-btn">
                ПОКАЗАТЬ ЕЩЁ
            </div> */}

        </div>
    );
};