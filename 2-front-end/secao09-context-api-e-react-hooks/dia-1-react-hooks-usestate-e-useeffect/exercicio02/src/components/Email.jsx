import React, { useState } from 'react';
import './Email.css'

export default function Email() {
  const [ email, useEmail ] = useState( [{ id: 0, title: 'Oportunidade de investimento', status: 0 }, { id: 1, title: 'PARE com a queda de cabelo!!', status: 0 }, { id: 2, title: 'Favor enviar o anexo', status: 0 }, { id: 3, title: 'Sua fatura chegou!', status: 0 }] );
  return (
    <div>
      <div>
        <button
          type="button"
        >
          Marcar todas como lida
        </button>
        <button
          type="button"
        >
          Marcar todas como não lida
        </button>
      </div>
      <div>
        {
          email.map((elem) => {
            return(
              <div className="emailsList" key={ elem.id }>
                <p className={ elem.status === 0 ? 'read' : 'noRead' }>{elem.title}</p>
                <button
                  type="button"
                >
                  Lida
                </button>
                <button
                  type="button"
                >
                  Não lida
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
