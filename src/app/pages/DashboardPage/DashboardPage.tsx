import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import DashboardView from "../../components/DashboardContainer";
import 'react-vertical-timeline-component/style.min.css';
import { CalendarIcon, CheckCircleIcon, CheckIcon, WarningTwoIcon, BellIcon, ViewIcon  } from '@chakra-ui/icons'
import { templateRows, Grid, GridItem } from '@chakra-ui/react'

const DashboardPage = () => {
  return (
    <DashboardView>
      
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(243, 180, 33)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(243, 180, 33)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(243, 180, 33)', color: '#fff' }}
            icon={<CalendarIcon />}
          >
            <h3 className="vertical-timeline-element-title">Spotkanie Biznesowe</h3>
            <h4 className="vertical-timeline-element-subtitle">Data: ...</h4>
            <p>
              Spotkanie z Janem Kowalskim przy ul. Pięknej 20, o godz. 11:00
            </p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(243, 58, 33)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(243, 58, 33)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(243, 58, 33)', color: '#fff' }}
            icon={<WarningTwoIcon />}
          >
            <h3 className="vertical-timeline-element-title">Wygasająca umowa!</h3>
            <h4 className="vertical-timeline-element-subtitle">Umowa wygasa: 11.12.2023</h4>
            <p>
              Przejdź do kontraktów [link] aby zobaczyć szczegóły wygasającej umowy
            </p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8, 166, 40)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(8, 166, 40)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(8, 166, 40)', color: '#fff' }}
            icon={<CheckIcon />}
          >
            <h3 className="vertical-timeline-element-title">Dodano nowego klienta</h3>
            <h4 className="vertical-timeline-element-subtitle">Data: ...</h4>
            <p>
              Przejdź do modułu kontrachentów [link] aby zobaczyć szczegóły
            </p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(15, 156, 191)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(15, 156, 191)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(15, 156, 191)', color: '#fff' }}
            icon={<ViewIcon />}
          >
            <h3 className="vertical-timeline-element-title">Podsumowanie miesięczne</h3>
            <h4 className="vertical-timeline-element-subtitle">Data: na koniec każdego miesiąca</h4>
            <p>
              Przejdź do raportów [link] aby zobaczyć szczegółowy raport z całego miesiąca
            </p>
            
          </VerticalTimelineElement>
        </VerticalTimeline>

      
    </DashboardView >
  );
};
export default DashboardPage;
