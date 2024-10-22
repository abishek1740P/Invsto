'use client'; 

import React, { useState } from 'react';
import './style.css'; 
type PricingComponentProps = {
  isDarkMode: boolean;
};

const PricingComponent: React.FC<PricingComponentProps> = ({ isDarkMode }) => {
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [pageviews, setPageviews] = useState(10); // Default to 10K pageviews

  const handleBillingSwitchChange = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  // Define pricing tiers
  const pricingTiers = [
    { views: 10, price: 8 },    // 10K
    { views: 50, price: 12 },   // 50K
    { views: 100, price: 16 },  // 100K
    { views: 500, price: 24 },  // 500K
    { views: 1000, price: 36 }, // 1M
  ];

  // Function to calculate the price based on selected pageviews and billing type
  const getPrice = (pageviews: number, isYearlyBilling: boolean) => {
    const tier = pricingTiers.find(t => t.views === pageviews);
    let monthlyPrice = tier ? tier.price : 0; // Default to 0 if no matching tier

    
    return isYearlyBilling ? (monthlyPrice * 0.75).toFixed(2) : monthlyPrice.toFixed(2);
  };

  const price = getPrice(pageviews, isYearlyBilling);

  // To Calculate the fill percentage based on the current tier
  const fillPercentage = (pricingTiers.findIndex(t => t.views === pageviews) / (pricingTiers.length - 1)) * 100;

  return (
    <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
      <div className="pricing-card">
        <div className="header">
          <p className="views">{pageviews}K PAGEVIEWS</p>
          <div className="price-slider">
            <p className="price">
              <span style={{ color: 'hsl(223.26deg 34.4% 24.51%)', fontWeight: 600 }}>${price}</span>/month
            </p>

            <input
              type="range"
              min="1"
              max="5"
              value={pricingTiers.findIndex(t => t.views === pageviews) + 1} 
              className="sliderr"
              id="pageviewsSlider"
              onChange={(e) => {
                const newValueIndex = Number(e.target.value);
                setPageviews(pricingTiers[newValueIndex - 1].views);
              }}
              step="1" 
              style={{
                background: `linear-gradient(to right, #59e2d8 ${fillPercentage}%, lightgray ${fillPercentage}%)`, 
              }}
            />
          </div>
        </div>

        <div className="billing-options">
          <div className="billing-info">
            <p style={{ padding: '0px 23px 0px 0px' }}>Monthly Billing</p>
            <label className="switch">
              <input
                type="checkbox"
                id="billingSwitch"
                checked={isYearlyBilling}
                onChange={handleBillingSwitchChange}
              />
              <span className="slider round" style={{ background: 'hsl(174, 86%, 45%)' }}></span>

            </label>
            <p style={{ padding: '0px 0px 0px 14px' }}>
              Yearly Billing <span className="discount">25% discount</span>
            </p>
          </div>
        </div>

        <hr className="billing-divider" />

        <ul className="features">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>

        <button className="cta-button">Start my trial</button>
      </div>
    </div>
  );
};

export default PricingComponent;
