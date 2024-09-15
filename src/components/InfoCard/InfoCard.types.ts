export interface InfoCardData {
  legend: string;
  img: string;
  title: string;
  secondTitle?: string;
  thirdTitle?: string;
  text: string;
}

export interface InfoCardProps {
  cardContent: InfoCardData;
  large?: boolean;
}
