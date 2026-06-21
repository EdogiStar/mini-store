function Testimonials() {

const reviews = [

{
name:"Sarah",
text:"Shopping was smooth and delivery was fast."
},

{
name:"Daniel",
text:"Great quality products and easy checkout."
},

{
name:"Amina",
text:"Simple design and excellent experience."
}

]

return (

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">

What Customers Say

</h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{reviews.map((review,index)=>(

<div
key={index}
className="border rounded-xl p-8"
>

<p className="text-gray-600">

★★★★★

</p>

<p className="mt-4">

"{review.text}"

</p>

<p className="mt-6 font-semibold">

— {review.name}

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Testimonials

