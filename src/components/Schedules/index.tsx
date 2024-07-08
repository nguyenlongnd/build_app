import { Scheduler } from "@bitnoi.se/react-scheduler";
import { mockedSchedulerData } from "./mockdata";
import { useState } from "react";
const Schedules =  () => {
  const [filterButtonState, setFilterButtonState] = useState(0);

  return (
    <section>
      <Scheduler
        data={mockedSchedulerData}
        isLoading={false}
        onRangeChange={(newRange) => console.log(newRange)}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          // Some clearing filters logic...
          setFilterButtonState(0)
        }}
        config={{
          zoom: 0,
          filterButtonState,
        }}
      />
    </section>
  );
}

export default Schedules;