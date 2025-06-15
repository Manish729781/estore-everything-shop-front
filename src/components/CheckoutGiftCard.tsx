
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CheckoutGiftCardProps {
  onApply: (discount: number) => void;
  applied: boolean;
  appliedCode?: string;
  discount: number;
}

const MOCK_GIFT_CARDS: Record<string, number> = {
  GIFT100: 100,
  GIFT200: 200,
  // Add more mock codes and amounts if desired
};

const CheckoutGiftCard: React.FC<CheckoutGiftCardProps> = ({
  onApply,
  applied,
  appliedCode,
  discount,
}) => {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState('');
  const { toast } = useToast();

  const handleApply = () => {
    const codeUpper = code.trim().toUpperCase();
    if (applied) {
      toast({ title: "Already applied", description: "Gift card already applied.", variant: "destructive" });
      return;
    }
    if (MOCK_GIFT_CARDS[codeUpper]) {
      onApply(MOCK_GIFT_CARDS[codeUpper]);
      toast({ title: "Gift Card Applied!", description: `₹${MOCK_GIFT_CARDS[codeUpper]} discount applied!` });
    } else {
      toast({ title: "Invalid Gift Card", description: "Please enter a valid gift card code.", variant: "destructive" });
    }
  };

  return (
    <div className="mb-4">
      <label className="flex items-center gap-2 cursor-pointer font-medium text-estore-dark">
        <input
          type="checkbox"
          checked={show || applied}
          onChange={() => setShow(!show)}
          disabled={applied}
          className="w-4 h-4 accent-estore-dark"
        />
        I have a gift card
      </label>
      {(show || applied) && (
        <div className="flex flex-col gap-2 mt-3 md:flex-row md:items-center">
          <input
            type="text"
            disabled={applied}
            placeholder="Enter gift card code"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-base md:text-sm"
            value={applied ? appliedCode : code}
            onChange={e => setCode(e.target.value)}
          />
          <button
            type="button"
            disabled={applied}
            onClick={handleApply}
            className={`min-w-[120px] bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-semibold mt-2 md:mt-0 ${
              applied ? 'opacity-50' : 'hover:bg-gray-900 transition'
            }`}
          >
            {applied ? 'Applied' : 'Apply'}
          </button>
          {applied && (
            <span className="ml-2 text-green-700 text-base font-bold">- ₹{discount}</span>
          )}
        </div>
      )}
      {applied && (
        <div className="text-green-700 text-sm mt-2">
          Gift Card Applied: <span className="font-semibold">{appliedCode}</span> (Discount ₹{discount})
        </div>
      )}
    </div>
  );
};

export default CheckoutGiftCard;
