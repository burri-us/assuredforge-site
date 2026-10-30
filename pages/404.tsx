import Link from "next/link";
import { Layout, Title } from "../components/Layout";

export default function NotFound() {
  return (
    <Layout title="Page not found | AssuredForge" description="The page you are looking for doesn't exist.">
      <Title lead={<>The page you are looking for doesn&apos;t exist. <Link href="/">Go to the home page</Link>.</>}>
        Page not found
      </Title>
    </Layout>
  );
}
