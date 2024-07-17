import {useForm} from 'react-hook-form'

const Contacto = () => {
  const {register, handleSubmit} = useForm();
   
  const enviar = (data) => {
    console.log(data);
  }
  
  return (
      <div className="container mt-5">
      <h1 className="text-center mb-4">Contacto</h1>
      <form className="needs-validation" onSubmit={handleSubmit(enviar)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresá tu nombre"
            {...register("nombre")}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresá tu e-mail"
            {...register("email")} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  );


};
export default Contacto;


