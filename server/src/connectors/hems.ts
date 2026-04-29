export function mockHems() {
  return {
    label: "HEMS Lab",
    status: "online",
    devices: [
      { name: "Inverter SMA-01", power: "3.2 kW", status: "producing" },
      { name: "Battery BYD-01", soc: "72%", status: "charging" },
      { name: "Heat Pump Daikin", power: "1.8 kW", status: "heating" },
      { name: "EV Charger", power: "0 kW", status: "standby" },
    ],
    todayProduction: "18.4 kWh",
    todayConsumption: "12.1 kWh",
    selfSufficiency: "87%",
  };
}
