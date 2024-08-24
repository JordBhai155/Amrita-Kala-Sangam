import React from 'react'
import Cal from './Cal';

export default function Calendar() {
    const propsArray = [
      { date: 'September 12, 2024', event: 'Green Innovations' },
      { date: 'September 28, 2024', event: 'Living Expo' },
      { date: 'October 5, 2024', event: 'Solar Workshop' },
      { date: 'October 22, 2024', event: 'Wind Forum' },
      { date: 'November 3, 2024', event: 'Hydro Summit' },
      { date: 'November 14, 2024', event: 'Geothermal Insights' },
      { date: 'December 1, 2024', event: 'Biomass Workshop' },
      { date: 'December 10, 2024', event: 'Tech Showcase' },
      { date: 'December 20, 2024', event: 'Future Gala' },
      
      ];
  return (
    <>
    <div class="calendar ind-comp comp1">
        <div class="comp-title">
            <h1>Upcoming Awareness Campaigns</h1>
            <hr class="title-hr"/>
        </div>
        <div class="calendar-body ind-comp-body center">
            <div class="calendar-content">
                
            {propsArray.map((props, index) => (
        <Cal key={index} date={props.date} event={props.event} />
      ))}
                

            </div>
        </div>
    </div>
    </>
  )
}
