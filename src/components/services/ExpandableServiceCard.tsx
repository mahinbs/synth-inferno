
import { memo } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Clock, DollarSign } from "lucide-react";
import { ServiceData, ColorType } from "./ServicesData";
import { colorClasses } from "./ServiceColorClasses";

interface ExpandableServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ExpandableServiceCard = memo(({
  service,
  isExpanded,
  onMouseEnter,
  onMouseLeave,
}: ExpandableServiceCardProps) => {
  const colors = colorClasses[service.color as ColorType];

  return (
    <div
      className={`group relative rounded-2xl bg-gray-900/80 backdrop-blur-sm border ${colors.border} hover:bg-gray-800/90 transition-all duration-300 overflow-hidden will-change-auto service-card-bg ${service.id}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ contentVisibility: "auto" }}
    >
      {/* Main Card Content */}
      <div className="flex items-center">
        {/* Service Image - Optimized */}
        <div className="pl-3">
          <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-l-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-60`}
            ></div>
            <div
              className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${colors.icon} border flex items-center justify-center`}
            >
              <service.icon className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3
                className={`text-2xl font-bold text-white mb-2 group-hover:${colors.text} transition-colors duration-300`}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Price and Timeline Badges */}
            <div className="hidden md:flex flex-col space-y-2 mr-6">
              <div
                className={`px-4 py-2 rounded-lg ${colors.button} border text-sm font-medium flex items-center space-x-2`}
              >
                <DollarSign className="h-4 w-4" />
                <span>{service.startingPrice}</span>
              </div>
              <div
                className={`px-4 py-2 rounded-lg ${colors.button} border text-sm font-medium flex items-center space-x-2`}
              >
                <Clock className="h-4 w-4" />
                <span>{service.timeline}</span>
              </div>
            </div>

            {/* Expand Icon */}
            <ChevronDown
              className={`h-6 w-6 ${
                colors.text
              } transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Expanded Content - Simplified animations */}
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isExpanded
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-8 border-t border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  About This Service
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              {/* Mobile Price/Timeline */}
              <div className="md:hidden flex space-x-4">
                <div
                  className={`px-4 py-2 rounded-lg ${colors.button} border text-sm font-medium flex items-center space-x-2`}
                >
                  <DollarSign className="h-4 w-4" />
                  <span>{service.startingPrice}</span>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg ${colors.button} border text-sm font-medium flex items-center space-x-2`}
                >
                  <Clock className="h-4 w-4" />
                  <span>{service.timeline}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 flex items-center"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${colors.text} mr-3`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${colors.tag} border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Link
                  to={service.route}
                  className={`flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl ${colors.button} border font-medium transition-all duration-300`}
                >
                  Learn More
                </Link>
                <button
                  className={`px-6 py-3 rounded-xl border ${colors.border} ${colors.text} hover:bg-gray-700/50 transition-all duration-300 font-medium`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ExpandableServiceCard.displayName = 'ExpandableServiceCard';
export default ExpandableServiceCard;
