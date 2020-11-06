import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>
            
            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="email" name="email" placeholder="Email" />
                <span className="focus-input100"></span>
            </div>
            
            
            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="password" name="password" placeholder="Password" />
                <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
                <div className="col">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                    Ingresar
                </button>
            </div>

        </form>
    )
}
