import ContainerSchedule from './ContainerSchedule'
import ScheduleColumn from "./ScheduleColumn"
import ScheduleCard from "./ScheduleCard"

export default function WeeklySchedule(){
    return (
        <ContainerSchedule>
            <ScheduleColumn title="Sunday">
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
            </ScheduleColumn>
            <ScheduleColumn title="Monday">
                <ScheduleCard />
            </ScheduleColumn> 
            <ScheduleColumn title="Tuesday">
                <ScheduleCard />
            </ScheduleColumn>
            <ScheduleColumn title="Wednesday">
                <ScheduleCard />
                <ScheduleCard />
            </ScheduleColumn>
            <ScheduleColumn title="Thursday">
                <ScheduleCard />
                <ScheduleCard />
            </ScheduleColumn>
            <ScheduleColumn title="Friday">
                <ScheduleCard />
            </ScheduleColumn>
            <ScheduleColumn title="Saturday">
                
            </ScheduleColumn>
        </ContainerSchedule>
    )
}