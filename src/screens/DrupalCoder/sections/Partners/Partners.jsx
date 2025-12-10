import React from "react";
import "./style.css";
import aecom from "../../../../assets/img/aecom.png";
import amd from "../../../../assets/img/amd.png";
import docker from "../../../../assets/img/docker.png";
import ibm from "../../../../assets/img/ibm.png";
import intel from "../../../../assets/img/intel.png";

export const Partners = () => {
    const logos = [ibm, aecom, amd, docker, intel];

    const fullList = [...logos, ...logos, ...logos]; 
    // 3 раза — чтобы точно заполнить ширину на любых мониторах

    return (
        <div className="partners">
            <div className="text-wrapper-9">С нами работают</div>

            <p className="text-wrapper-10">
                Десятки компаний доверяют нам самое ценное…
            </p>

            <div className="partners-slider">
                <div className="partners-track">
                    {fullList.map((logo, index) => (
                        <div className="partner-logo" key={index}>
                            <img src={logo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};