function fetchData() {
    fetch('https://uttamkannantha.github.io/amFpcmFt/Assignment_1/data.json')
  .then(response => response.json())
  .then((data) => {
        
     //generateing section 2 data
        generateSection2(data)

            //Section_3 data
        document.getElementById("section3_1").innerHTML = data.section3.text[0]
        document.getElementById("section3_2").innerHTML = data.section3.text[1]

     //generating section 4 data
     generateSection4(data)
    })
}

//Injects html and contents to section 2
function generateSection2(data) {
    const section2Data = data.section2;
    const parent = document.getElementById("section_cards");
    for(var i = 0; i < section2Data.length; i++) {

        //Main div(colunm) element
        const column = document.createElement('div')
        column.classList.add('column')

            //Card elements (1/3 cards)
        const card = document.createElement('div')
        card.classList.add('card')

            //Cards image 
        const cardImage = document.createElement('img')
        cardImage.classList.add('cardImage')
        cardImage.src = section2Data[i].image

            //Heading of the text 
        const p1 = document.createElement('p')
        p1.style.fontSize = '18px'
        p1.innerHTML = section2Data[i].heading

            //Body of the card(text)
        const p2 = document.createElement('p')
        p2.style.fontSize = '15px'
        p2.innerHTML = section2Data[i].text

            //Generate hierarchy
        card.appendChild(cardImage)
        card.appendChild(p1)
        card.appendChild(p2)
        column.appendChild(card)

            //Append it to parent 
        parent.appendChild(column)
    }
}

//Injects html and contents to section4
function generateSection4(data){
  const section4Data = data.section4;

  //Parent tag of section 4
    const parent = document.getElementById("section4");

  //Looping over the contents of array 
  for(var i = 0; i < section4Data.length; i++) {
     
     //Row attribute
     const row = document.createElement('div')
     row.classList.add('section4_row')
     row.style.top = '100px'

     //Image colums common properties
     //Image column
     const imageColumn = document.createElement('div')
     imageColumn.classList.add('column_section4')

     //Image card
     const imageCard = document.createElement('div')
     imageCard.classList.add('section4_card_image')

     //Image
     const image = document.createElement('img')
     image.classList.add('section4_cardImage')
     image.src = section4Data[i].image


     //Text columns common properties
     //Text column
     const textColumn = document.createElement('div')
     textColumn.classList.add('column_section4')

     //Text card
     const textCard = document.createElement('div')
     textCard.classList.add('section4_card_text')

     //Text heading
     const textHeading = document.createElement('p')
     textHeading.style.fontSize = '19px'
     textHeading.style.margin = '0px'
     textHeading.innerHTML = section4Data[i].heading

     //Text body
     const textBody = document.createElement('p')
     textBody.innerHTML = section4Data[i].text

     //Even rows image to the left and text to the right - setting properties
     if(i%2 === 0){
           image.style.float = 'left'
           textColumn.style.marginLeft = '-228px'
           textCard.style.left = '50px'
     } 
     //Odd rows text to the left and image to the right - setting properties
     else{
           
           imageCard.style.float = 'right'
           image.style.float = 'right'
           textHeading.style.textAlign = 'right'
     }

     //Generating the image hierarchy
     imageCard.appendChild(image)
     imageColumn.appendChild(imageCard)

     //Generating text hierarchy
     textCard.appendChild(textHeading)
     textCard.appendChild(textBody)
     textColumn.appendChild(textCard)

     //Even rows image to the left and text to the right - creating hierarchy; image first; text next
     if(i%2 === 0){
        
        row.appendChild(imageColumn)
        row.appendChild(textColumn)
     }
     else{
       //Odd rows text to the left and image to the right - creating hierarchy; text first; image next
        row.appendChild(textColumn)
        row.appendChild(imageColumn)           
     }
     
     parent.appendChild(row)
  }
}

fetchData()