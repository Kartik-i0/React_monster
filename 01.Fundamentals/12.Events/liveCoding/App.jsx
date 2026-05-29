import React from 'react'

// ----------------------------------Example-1
const Button =()=>{
  const handleClick = () =>{
    console.log(`Event is Triggered and logge random no = ${Math.random()*100000}`)
  }

  return (<button onClick={handleClick}> click and open console to see event is Triggered or not. </button>)
}


//-----------------------------------Example-2
const Copy = ()=>{
  const copyHandler = ()=>{
    console.log(`Stop Stealing my Data.`);
  }
  
  return  <>

        <p onCopy={copyHandler}>
          Loremipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione pariatur temporibus quis vitae obcaecati dolore, qui inventore excepturi sit ullam a, eius quas sint cupiditate velit iure itaque accusamus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam voluptas labore quos sit rerum at officia harum error, magni nesciunt tempora, enim asperiores ratione saepe facere ad reiciendis ducimus.
          Quidem quasi deleniti molestiae sequi cupiditate dolorum, cum ex necessitatibus voluptate quo, eveniet vero rerum, illum alias exercitationem! Ipsa deleniti doloribus aliquam voluptatem quae animi ratione culpa unde dolor ullam.
          Harum, cupiditate. Reprehenderit quae ratione sed dolorem commodi nesciunt molestiae odio labore fuga rem pariatur unde aliquid ducimus illo, maiores reiciendis architecto laboriosam, officiis dignissimos laudantium praesentium eligendi libero. Sapiente?
          Laudantium tempora quod, cupiditate consectetur quas laborum dolore suscipit fugit tempore animi nobis nam commodi excepturi maiores magni veritatis laboriosam vitae minima! Laudantium vero tempora voluptates itaque accusantium, recusandae libero?
          Totam temporibus a tempora molestias voluptate laborum ipsam explicabo, doloremque, accusamus fuga delectus quo impedit accusantium pariatur enim nobis vel iste quasi corrupti et est soluta culpa aut eum. Voluptates.
          Corporis consectetur maiores dolores quisquam molestiae. Reprehenderit asperiores libero ad eligendi voluptatem. Enim vel aspernatur, beatae in commodi fugiat nesciunt, culpa illo recusandae error earum repudiandae, dolor quisquam nulla similique.
          Nulla suscipit eveniet quis. Ipsa expedita quisquam enim earum odio magnam totam illum porro distinctio repellat vel, doloribus ad natus officia ipsum nihil adipisci praesentium dolores deleniti vero minima? Iure.
          Blanditiis consectetur, quos exercitationem temporibus itaque unde vel autem rem incidunt laboriosam sint. Accusamus blanditiis voluptas optio, laboriosam id ullam quaerat mollitia qui. Error id ratione voluptatum libero nostrum sapiente!
         </p>

     </>
}


const Move = ( ) =>{
  const moveHandler = () =>{
    alert("Mouse move event is fired.");
    console.log("Mouse Move Event is Fired.")
  }

  return(
    <>
      <h1>Mouse Move Handler on para :</h1>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magnam voluptas incidunt facilis, minus atque beatae odit quidem expedita necessitatibus quos ea earum sit? At qui corrupti nesciunt maxime eligendi?
        Animi cum recusandae libero nam quasi ipsum explicabo ducimus optio dolorum provident commodi, natus sint? Porro, quas? Et quisquam ullam quam nobis aspernatur repudiandae at eos libero, fugiat aliquid architecto!
        Molestias expedita voluptate dolor consequuntur, quidem sequi eaque excepturi at tenetur, iusto ea, dignissimos alias reprehenderit vero quibusdam nostrum eligendi quasi laborum ex voluptatem autem. Explicabo nostrum illum ipsa voluptatum?
        Modi obcaecati nemo numquam accusantium reprehenderit distinctio ab, laborum illo, eligendi consequatur explicabo natus ut sit est sint tenetur, praesentium atque aliquam cumque et. Officiis quas accusantium commodi maxime hic?
        Sunt nobis velit cupiditate quibusdam ex minus, consectetur ab neque temporibus reiciendis totam nemo rerum laboriosam consequuntur labore ipsam magni voluptatum dignissimos rem, quod unde expedita. Nemo ipsam veritatis cupiditate!
        Iusto quas suscipit labore, dolorem, sequi eveniet consectetur excepturi temporibus similique alias reiciendis animi autem veniam vitae aliquam, voluptates laborum? Nihil tempore officiis nemo voluptatem mollitia nobis minima ullam assumenda?
        Autem nisi ea aperiam ipsa quia. Quos excepturi fugiat voluptates inventore dolores expedita culpa, fuga, animi est odio repellendus eveniet mollitia magnam similique debitis iure cum minima, harum adipisci nemo!
        Nisi delectus earum iure? Vero doloremque obcaecati animi maiores fugiat distinctio tempore, reprehenderit cum odit odio eos numquam corporis voluptas, iste voluptate suscipit perspiciatis deserunt modi, deleniti minus necessitatibus eum.
        Amet quasi ipsum ab quibusdam. Molestiae repudiandae beatae quis explicabo iste. Beatae commodi sunt tempora dolorum nostrum omnis? Ullam impedit maiores, sit aliquid nam similique reprehenderit quia aliquam architecto nihil.
        Maxime animi culpa aspernatur, in iusto corporis impedit asperiores temporibus, iste doloribus provident voluptas. Beatae soluta possimus praesentium quaerat ab, aliquam modi recusandae ullam labore vitae ipsam quia sapiente vero!
      </p>
    </>
  )

}

const App = () => {
  return (
    <div>
      <Button/>
      <Copy/>
      <Move/>

    </div>
  )
}

export default App