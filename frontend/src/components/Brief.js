import React from 'react'

function Brief() {
  return (
    <>
    <div class="brief-desc ind-comp comp1">
        <div class="comp-title">
            <h1>Brief Terms Explanation</h1>
            <hr class="title-hr"/>
        </div>
        <div class="brief-body ind-comp-body center">
            <div class="brief-card" id="c1">
                <div class="brief-card-img">
                    {/* <!-- <img src="images/img1.jpg" alt="" srcset=""> --> */}
                </div>
                <div class="brief-card-content">
                    <h1>Innovations</h1>
                    <p>Discover the latest breakthroughs in eco-friendly technology! From solar panels to electric vehicles, we showcase innovations that are changing the way we live and reducing our carbon footprint. Explore how these advancements contribute to a greener planet and find out how you can be a part of the movement toward a sustainable future.</p>
                    <button><a href="https://apiumhub.com/tech-blog-barcelona/innovation-blogs/"  target='_blank'>Know More</a></button>
                </div>
            </div>
            <div class="brief-card" id="c2">
                <div class="brief-card-img">
                    {/* <!-- <img src="images/img1.jpg" alt="" srcset=""> --> */}
                </div>
                <div class="brief-card-content">
                    <h1>Sustainability</h1>
                    <p>Sustainability is all about making choices that protect our environment for future generations. Learn about practices that help reduce waste, conserve energy, and promote the use of renewable resources. Our site highlights simple yet impactful ways to live sustainably and support eco-conscious initiatives in everyday life.</p>
                    <button><a href="https://www.mckinsey.com/capabilities/sustainability/our-insights/sustainability-blog" target='_blank'>Know More</a></button>
                </div>
            </div>
            <div class="brief-card" id="c3">
                {/* <!-- <div class="brief-card-img">
                    <img src="images/img1.jpg" alt="" srcset="">
                </div> --> */}
                <div class="brief-card-content">
                    <h1>Eco-Initiatives</h1>
                    <p>Discover impactful eco-initiatives that are making a difference around the world! From local recycling programs and community clean-up events to global conservation efforts and wildlife protection projects, learn how these initiatives are driving positive change and how you can get involved.</p>
                    <button><a href="https://www.greenmatch.co.uk/blog/how-to-be-more-eco-friendly" target='_blank'>Know More</a></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Brief