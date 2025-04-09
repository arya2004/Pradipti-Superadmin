import React, { useState, useEffect } from "react";
import { Search, Filter, Check, X } from "lucide-react";
import { Program } from "../api/mockData";
import { useNavigate } from "react-router-dom";
import LatestNotification from "../components/LatestNotfication";

export function ProgramManagementDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [editingProgramId, setEditingProgramId] = useState(null);
  const [editedProgram, setEditedProgram] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const programsData = await Program.fetchPrograms();
        setPrograms(programsData);
        setFilteredPrograms(programsData);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = programs.filter(
      (program) =>
        program.name.toLowerCase().includes(term.toLowerCase()) ||
        program.id.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPrograms(filtered);
    setCurrentPage(1);
  };

  const handleView = (programId) => {
    navigate(`/program/${programId}`);
  };

  const handleEdit = (program) => {
    setEditingProgramId(program.id);
    setEditedProgram({ ...program });
  };

  const handleSave = () => {
    setPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === editingProgramId ? editedProgram : program
      )
    );
    setFilteredPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === editingProgramId ? editedProgram : program
      )
    );
    setEditingProgramId(null);
  };

  const handleCancel = () => {
    setEditingProgramId(null);
    setEditedProgram(null);
  };

  const handleInputChange = (field, value) => {
    setEditedProgram((prev) => ({ ...prev, [field]: value }));
  };

  const handleApprove = (programId) => {
    console.log(`Approving program ${programId}`);
    setPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === programId ? { ...program, status: 'approved' } : program
      )
    );
    setFilteredPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === programId ? { ...program, status: 'approved' } : program
      )
    );
  };

  const handleDeny = (programId) => {
    console.log(`Denying program ${programId}`);
    setPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === programId ? { ...program, status: 'denied' } : program
      )
    );
    setFilteredPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === programId ? { ...program, status: 'denied' } : program
      )
    );
  };

  const indexOfLastProgram = currentPage * itemsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - itemsPerPage;
  const currentPrograms = filteredPrograms.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="font-montserrat p-6 md:p-8 pt-16 md:pt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Program Management</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search applications..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-4 h-4" />
          {showFilters ? "Hide Filters" : "Apply Filters"}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-2">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b bg-gray-50">
                <th className="px-4 py-3 font-semibold">Program Name</th>
                <th className="px-4 py-3 font-semibold">Program ID</th>
                <th className="px-4 py-3 font-semibold text-center">No. of Applications</th>
                <th className="px-4 py-3 font-semibold text-center">No. of Slots Remaining</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPrograms.map((program) => (
                <tr key={program.id} className="border-b hover:bg-gray-50">
                  {editingProgramId === program.id ? (
                    <>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={editedProgram.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={editedProgram.id}
                          onChange={(e) =>
                            handleInputChange("id", e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={editedProgram.applications}
                          onChange={(e) =>
                            handleInputChange("applications", e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full text-center"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={editedProgram.slotsRemaining}
                          onChange={(e) =>
                            handleInputChange("slotsRemaining", e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full text-center"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={editedProgram.status}
                          onChange={(e) =>
                            handleInputChange("status", e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                          <button
                            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-3">{program.name}</td>
                      <td className="px-4 py-3">{program.id}</td>
                      <td className="px-4 py-3 text-center">
                        {program.applications}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {program.slotsRemaining}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          program.status === 'approved' 
                            ? 'bg-green-100 text-green-800'
                            : program.status === 'denied'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {program.status || 'Pending'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            className="px-3 py-1 bg-myBlue text-white rounded hover:bg-blue-600"
                            onClick={() => handleView(program.id)}
                          >
                            View
                          </button>
                          <button
                            className="px-3 py-1 bg-myGreen text-white rounded hover:bg-green-600"
                            onClick={() => handleEdit(program)}
                          >
                            Update
                          </button>
                          <button
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-1"
                            onClick={() => handleApprove(program.id)}
                            disabled={program.status === 'approved'}
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-1"
                            onClick={() => handleDeny(program.id)}
                            disabled={program.status === 'denied'}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div>
          Showing {currentPage * itemsPerPage - (itemsPerPage - 1)} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredPrograms.length)} of{" "}
          {filteredPrograms.length} results
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredPrograms.length / itemsPerPage)
            }
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramManagementDashboard;