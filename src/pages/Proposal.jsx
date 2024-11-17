import ProposlasTable from "../features/proposals/ProposalTable";

function Proposal() {
  return (
    <div>
      <h1 className="font-black text-xl text-secondary-700 mb-8">
        لیست پروپوزال ها
      </h1>
      <ProposlasTable />
    </div>
  );
}
export default Proposal;
