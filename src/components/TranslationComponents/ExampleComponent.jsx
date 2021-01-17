import React from 'react';
import { useTranslation } from 'react-i18next';
import './translations/i18n';

export const ExampleComponent = (props) => {
  const { t } = useTranslation();

  let lng = props.lang;

  return (
    <div>
      <div style={{ textAlign: lng === "arab" ? "right" : "left" }}>
        <p>
          { t("welcome") }
        </p>
      </div>
    </div>
  );
}