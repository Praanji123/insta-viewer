import React, { useEffect } from 'react';
import styled from 'styled-components';

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  margin: ${props => props.position === 'top' ? '0 0 20px 0' : '20px 0 0 0'};
`;

const AdPlaceholder = styled.div`
  width: 728px;
  height: 90px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  
  @media (max-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 12px;
  }
`;

const AdBanner = ({ position }) => {
  useEffect(() => {
    try {
      // Initialize AdSense ads when component mounts
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.log('AdSense error:', e);
    }
  }, []);

  return (
    <AdContainer position={position}>
      {/* Replace this with actual AdSense code */}
      <ins className="adsbygoogle"
           style={{display: 'block'}}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true">
      </ins>
      
      {/* Fallback placeholder */}
      <AdPlaceholder>
        Advertisement Space - Replace with your AdSense code
      </AdPlaceholder>
    </AdContainer>
  );
};

export default AdBanner; 