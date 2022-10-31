import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categorys = [{
    category: 'Beliebte Gerichte',
    dishes:[

   {
         name:"Pizza",
         info:"none",
         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
         price:"7.00"
       },
       {
          name:"Salad",
          info:"none",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          price:"3.50"
        },
       {
          name:"Spaghetti",
          info:"none",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          price:"4.00"
        }

    ]},
    {category: 'Salate', dishes:[

    {
          name:"Pizza",
          info:"none",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          price:"7.00"
        },
        {
           name:"Salad",
           info:"none",
           description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
           price:"3.50"
         },
        {
           name:"Spaghetti",
           info:"none",
           description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
           price:"4.00"
         }

    ]}
  ];

//   'Pizza',
//       'Familien-Pizza',
//       'Pasta',
//       'Burger',
//       'Schnitzel',
//       'Snacks und Beilagen',
//       'Dips',
//       'Alkoholfreie Getränke',
//       'Alkoholhaltige Getränke'

  constructor() { }

  ngOnInit(): void {
  }

}
