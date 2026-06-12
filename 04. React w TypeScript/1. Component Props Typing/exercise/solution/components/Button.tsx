
// const Button = (props:{
//     label : string ;
//     onCick : () => void ;
//     disabled : boolean;
// }) => {
//   return (
//     <div>
//         <button onClick={props.onCick} disabled={props.disabled}>
//             {props.label}
//         </button>
//     </div>
//   )
// }


//Destructuring
const Button = ({label , onCick , disabled }:
{ label : string; onCick : () => void; disabled : boolean;}) => {
  return (
    <div>
        <button onClick={onCick} disabled={disabled}>
            {label}
        </button>
    </div>
  )
}


export default Button