"use client";

import { forwardRef } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { pl } from "date-fns/locale/pl";
import { CalendarDays } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pl", pl);

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText?: string;
  minDate?: Date;
  required?: boolean;
}

const CustomInput = forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void; placeholder?: string }>(
  ({ value, onClick, placeholder }, ref) => (
    <button
      type="button"
      className="form-input w-full text-left flex items-center justify-between cursor-pointer"
      onClick={onClick}
      ref={ref}
    >
      <span className={value ? "text-white" : "text-[#a0a0b0]/50"}>
        {value || placeholder}
      </span>
      <CalendarDays className="w-5 h-5 text-[#c9a227]" />
    </button>
  )
);
CustomInput.displayName = "CustomInput";

export function DatePicker({ selected, onChange, placeholderText = "Wybierz datę", minDate, required }: DatePickerProps) {
  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      locale="pl"
      dateFormat="dd.MM.yyyy"
      minDate={minDate || new Date()}
      placeholderText={placeholderText}
      customInput={<CustomInput placeholder={placeholderText} />}
      calendarClassName="dark-datepicker"
      showPopperArrow={false}
      popperPlacement="bottom-start"
      required={required}
      wrapperClassName="w-full"
    />
  );
}

