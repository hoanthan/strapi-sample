import type { Schema, Struct } from '@strapi/strapi';

export interface LandingPageWhyChooseUsSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_why_choose_us_sections';
  info: {
    displayName: 'Why Choose Us Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    keyPoints: Schema.Attribute.Component<
      'why-choose-us-section.key-point',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhyChooseUsSectionKeyPoint extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_section_key_points';
  info: {
    displayName: 'Key Point';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing-page.why-choose-us-section': LandingPageWhyChooseUsSection;
      'why-choose-us-section.key-point': WhyChooseUsSectionKeyPoint;
    }
  }
}
