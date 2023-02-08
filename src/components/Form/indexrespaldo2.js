import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import '../Monitor/Monitor.css'

import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Form/Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../Form/Input';
import '../Form/Form.css'

import { BsCheckCircleFill } from 'react-icons/bs';


const FormsPages = () => {

	useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);

	const [discord, cambiardiscord] = useState({campo: '', valido: null});
	const [wallet, cambiarwallet] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		discord: /^[a-zA-ZÀ-ÿ-\s]+#[0-9]{2,30}$/, // Letras, numeros, guion y guion_bajo
		wallet: /^[a-zA-Z0-9_.+-]$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		var found = "false";

		if(
			discord.valido === 'true' &&
			wallet.valido === 'true'
		){ 

			fetch('https://demonsdb-1d911-default-rtdb.firebaseio.com/demons2.json') .then(response => response.json()) .then(data => {
				// console.log(data)
				var users = data;
				for (var i in users) {
					// console.log(users[i])
					// console.log (discord)
					if (users[i].discord.campo == discord.campo) {
						var found = "true";
					}
				}
				console.log (found)
				if (found == "true") {
					alert ("Usuario encontrado")
				}
				
			})
			if (found == "false") {
				
				cambiarFormularioValido(true);
				cambiardiscord({campo: '', valido: ''});
				cambiarwallet({campo: '', valido: 'null'});
				
				const res=await fetch("https://demonsdb-1d911-default-rtdb.firebaseio.com/demons2.json",
				{
					method:'POST',
					headers:{
						'Content-Type':'application/json'
					},
					body:JSON.stringify({
					 discord,
					 wallet,     
					})
				 })
				
				// ... 
			}
		} else {
			cambiarFormularioValido(false);
		}
	}

    const [details, setDetails] = useState({
        discord: '',
        wallet: '',     
    })

    // const PostData =async(e)=>{
    //     e.preventDefault()

    //     const{discord, wallet}=details;

    //    const res=await fetch("https://demonsdb-1d911-default-rtdb.firebaseio.com/demons2.json",
    //    {
    //        method:'POST',
    //        headers:{
    //            'Content-Type':'application/json'
    //        },
    //        body:JSON.stringify({
    //         discord,
    //         wallet,     
    //        })
    //     })

    // }

	return (

        <div className='FormSection'>
            <div className='FormInputs'>
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={discord}
					cambiarEstado={cambiardiscord}
					tipo="text"
					label="Discord Account"
					placeholder="Discord#1234"
					name="discord"
					leyendaError="The Discord nickname must have text, a # followed by 4 numbers"
					expresionRegular={expresiones.discord}
                    onChange={(e)=>
                        setDetails({...details,discord:e.target.value})}
				/>
				<Input
					estado={wallet}
					cambiarEstado={cambiarwallet}
					tipo="text"
					label="Cantos Wallet (42 Characters)"
					placeholder="0x2b7ac31C2aC172D0D555ddC5FDbc17315521E9F7"
					name="wallet"
					 leyendaError="The wallet is not recognized"
					expresionRegular={expresiones.wallet}
                    onChange={(e)=>
                        setDetails({...details,wallet:e.target.value})}
				/>

				{/* <ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos> */}
                
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Please fill in the information correctly.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
                    <Boton type="submit">SEND INFO</Boton>
					{formularioValido === true && <MensajeExito><BsCheckCircleFill size='1.7rem'/>&nbsp; Information sent successfully!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
        </div>
        </div>
	);
}
 
export default FormsPages;