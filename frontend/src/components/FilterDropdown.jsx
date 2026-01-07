import { useState } from "react";

function FilterDropdown({ title, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter-block">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        <h4>{title}</h4>
        <span className={`arrow ${open ? "open" : ""}`}>⌄</span>
      </div>

      {open && (
        <div className="filter-options">
          {options.map((item, index) => (
            <label key={index} className="filter-option">
              <input type="checkbox" />
              <span>{item.label}</span>
              {item.count && <span className="count">({item.count})</span>}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
