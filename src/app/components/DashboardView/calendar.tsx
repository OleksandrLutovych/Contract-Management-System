import React from 'react'; 

import { Eventcalendar, getJson, Toast, MbscCalendarEvent, MbscEventcalendarView, MbscEventClickEvent } from '@mobiscroll/react';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  React.useEffect(() => {
      getJson('https://trial.mobiscroll.com/events/?vers=5', (events: MbscCalendarEvent[]) => {
          setEvents(events);
      }, 'jsonp');
  }, []);

  const closeToast = React.useCallback(() => {
      setToastOpen(false);
  }, []); 
  
  const onEventClick = React.useCallback((event: MbscEventClickEvent) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);
  
  const view = React.useMemo<MbscEventcalendarView>(() => {
      return {
          calendar: { labels: true }
      };
  }, []);

  return <>
      <Eventcalendar
          theme="ios" 
          themeVariant="light"
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={myEvents}
          view={view}
          onEventClick={onEventClick}
     />
     <Toast 
    		message={toastText}
    		isOpen={isToastOpen}
            onClose={closeToast}
    	/>
  </>
}
