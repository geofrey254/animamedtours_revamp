import React from "react";

const Contact_banner = () => {
  return (
    <div>
      <section className="mappy p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.707317055939!2d36.80441117319883!3d-1.26547004094992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173fc261c85d%3A0xc5db81b7b61f20ae!2sMadonna%20House!5e0!3m2!1sen!2ske!4v1678050927342!5m2!1sen!2ske"
          width="1920"
          height="540"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact_banner;
