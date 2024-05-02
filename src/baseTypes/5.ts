enum DayOfWeek {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "wednesday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.saturday || day === DayOfWeek.sunday;
}
